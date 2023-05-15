const CtaSection = ({ textContent, url }) => {
  return (
    <section className="overflow-hidden bg-primary px-5 py-14">
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        <div className="flex  flex-col items-center space-y-4 text-center text-white">
          <p className="text-4xl font-semibold">{textContent.title}</p>
          <p className="w-full max-w-[573px] text-xl font-normal">{textContent.description}</p>
        </div>
        <button
          className="flex rounded-lg bg-white px-5 py-3 text-lg font-medium text-primary hover:bg-blue-10"
          onClick={() => {
            window.open(url, '_blank');
          }}
        >
          {textContent.cta}
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
