import { TagContainer } from './styles';

interface TagProps {
  label: string;
}
export function Tag({ label }: TagProps) {
  return <TagContainer>{label}</TagContainer>;
}
