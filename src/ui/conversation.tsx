type ConversationProps = {
  hasText: boolean;
};

const Conversation = ({ hasText }: ConversationProps) => {
  return (
    <div>
      <p
        className={`text-center text-xl tracking-wide ${hasText ? "hidden" : ""}`}
      >
        Hello, what can I do for you today?
      </p>
      {hasText && (
        <div className="space-y-3 ">
          {Array.from({ length: 30 }, (_, index) => (
            <p key={index}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex est
              iure commodi placeat quam quidem dolore quia nisi sed. Recusandae
              perferendis nesciunt ea sint eveniet dolorum iste vitae ad veniam!
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Conversation;
