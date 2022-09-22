import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface Item {
  coffeeId: number;
  count: number;
  value: number;
}

interface ShopInfos {
  cep: string;
  rua: string;
  numero: string;
  complemento: string | null;
  bairro: string;
  cidade: string;
  uf: string;
  paymentType: 'credit' | 'debit' | 'cash';
}

interface ShopCartContextDataProps {
  items: Item[];
  shopInfos: ShopInfos;

  addItem(coffeeId: number, value: number): void;

  removeItem(coffeeId: number): void;

  totalItem(): number;

  totalCost(): number;

  deleteItem(coffeeId: number): void;

  updateShopInfo(value: Partial<ShopInfos>): void;
}

interface IShopCartProvider {
  children: ReactNode;
}

const ShopCartContext = createContext<ShopCartContextDataProps>(
  {} as ShopCartContextDataProps,
);

const itemsLocalStorageKey = '@coffee-delivery:shop-cart-items-1.0.0';
const infosLocalStorageKey = '@coffee-delivery:shop-cart-infos-1.0.0';

export function ShopCartProvider({ children }: IShopCartProvider) {
  const [items, setItems] = useState<Item[]>(() => {
    const storage = localStorage.getItem(itemsLocalStorageKey);
    return storage ? JSON.parse(storage) : [];
  });

  const [shopInfos, setShopInfos] = useState<ShopInfos>(() => {
    const storage = localStorage.getItem(infosLocalStorageKey);
    return storage
      ? JSON.parse(storage)
      : {
          cep: '',
          rua: '',
          numero: '',
          complemento: '',
          bairro: '',
          cidade: '',
          uf: '',
          paymentType: 'credit',
        };
  });

  const addItem = useCallback(
    (coffeeId: number, value: number) => {
      const indexItem = items.findIndex((item) => item.coffeeId === coffeeId);
      if (indexItem > -1) {
        const newItem = {
          coffeeId,
          count: items[indexItem].count + 1,
          value: items[indexItem].value,
        };
        const newItems = [...items];
        newItems[indexItem] = newItem;
        setItems(newItems);
        return;
      }

      setItems((old) => [...old, { coffeeId, count: 1, value }]);
    },
    [items],
  );

  const removeItem = useCallback(
    (coffeeId: number) => {
      const indexItem = items.findIndex((item) => item.coffeeId === coffeeId);
      if (indexItem > -1) {
        const newItem = {
          coffeeId,
          count: items[indexItem].count - 1,
          value: items[indexItem].value,
        };
        const newItems = [...items];
        newItems[indexItem] = newItem;
        setItems(newItems);
      }
    },
    [items],
  );

  const deleteItem = useCallback((coffeeId: number) => {
    setItems((old) => old.filter((item) => item.coffeeId !== coffeeId));
  }, []);

  const totalItem = useCallback(() => {
    return items.reduce((acc: number, item) => {
      return acc + item.count;
    }, 0);
  }, [items]);

  const totalCost = useCallback(() => {
    return items.reduce((acc: number, item) => {
      return acc + item.count * item.value;
    }, 0);
  }, [items]);

  const updateShopInfo = useCallback((shopInfo: Partial<ShopInfos>) => {
    setShopInfos((old) => ({ ...old, ...shopInfo }));
  }, []);

  useEffect(() => {
    const stateJson = JSON.stringify(items);
    localStorage.setItem(itemsLocalStorageKey, stateJson);
  }, [items]);

  useEffect(() => {
    const stateJson = JSON.stringify(shopInfos);
    localStorage.setItem(infosLocalStorageKey, stateJson);
  }, [shopInfos]);

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      totalItem,
      deleteItem,
      totalCost,
      shopInfos,
      updateShopInfo,
    }),
    [
      items,
      addItem,
      removeItem,
      totalItem,
      deleteItem,
      totalCost,
      shopInfos,
      updateShopInfo,
    ],
  );

  return (
    <ShopCartContext.Provider value={value}>
      {children}
    </ShopCartContext.Provider>
  );
}

export const useShopCart = (): ShopCartContextDataProps => {
  const context = useContext(ShopCartContext);
  if (!context) {
    throw new Error('useToash must be used within an ShopCartProvider');
  }
  return context;
};
