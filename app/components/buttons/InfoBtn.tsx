type Props = {
  className?: string;
  content: string;
};

export default function InfoBtn({ className, content }: Props) {
  return (
    <button className={`block bg-namasteGreen px-4 py-2 text-white rounded-xl dark:text-custom-white ${className}`}>
      {content}
    </button>
  );
}
