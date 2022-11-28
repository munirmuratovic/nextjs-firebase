

const CentralForm = (props) => {

  return (
    <div className="flex items-center w-full h-screen">
      <div className="container mx-auto my-auto">
        <div className="max-w-md mx-auto">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default CentralForm;
