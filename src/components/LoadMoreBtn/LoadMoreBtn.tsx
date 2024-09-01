type Props = {
  onClick: () => void
}

const LoadMoreBtn: React.FC<Props> = ({ onClick }) => {
  return <button onClick={onClick}>Load more</button>;
};

export default LoadMoreBtn;
