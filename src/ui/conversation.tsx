type ConversationProps = {
  hasText: boolean;
};

const Conversation = ({ hasText }: ConversationProps) => {
  return (
    <div className={`${hasText ? "flex-1 pb-20" : ""} `}>
      <p
        className={`text-xl text-center tracking-wide ${hasText ? "hidden" : ""}`}
      >
        Hello, what can I do for you today?
      </p>

      {hasText &&
        Array.from({ length: 30 }, (_, index) => (
          <p key={index} className="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex est iure
            commodi placeat quam quidem dolore quia nisi sed. Recusandae
            perferendis nesciunt ea sint eveniet dolorum iste vitae ad veniam!
          </p>
        ))}has
    </div>
  );
};

export default Conversation;
