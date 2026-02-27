type ConversationProps = {
  hasText: boolean;
};

const Conversation = ({ hasText }: ConversationProps) => {
  return (
    <div className={`${hasText ? "flex-1" : ""}`}>
      <p className={`text-xl text-center tracking-wide ${hasText ? "hidden" : ""}`}>
        Hello, what can i do for you today?
      </p>
      {hasText && (
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex est iure
          commodi placeat quam quidem dolore quia nisi sed. Recusandae
          perferendis nesciunt ea sint eveniet dolorum iste vitae ad veniam!
        </p>
      )}
    </div>
  );
};

export default Conversation;
