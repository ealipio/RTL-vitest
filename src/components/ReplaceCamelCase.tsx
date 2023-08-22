import { splitCamelCase } from '../lib/utils';

interface IProps {
  word: string;
}

const ReplaceCamelCase: React.FC<IProps> = ({ word }: IProps) => {
  const newWord = splitCamelCase({ word });
  return <div>{newWord}</div>;
};

export default ReplaceCamelCase;
