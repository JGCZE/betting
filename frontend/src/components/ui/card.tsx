interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: IProps) => (
  <div className={className}>
    {children}
  </div>
);

export default Card;
