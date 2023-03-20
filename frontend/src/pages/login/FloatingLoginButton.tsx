const FloatingLoadingButton = () => {
  return <div className="SelectDisable p-6">
    <div className="flex h-14 text-l font-semibold items-center bg-no-repeat border-[#303241] bg-[#171822] rounded-xl border-2 overflow-hidden text-[#fff] SelectDisable">
      <a href='/login'><p className="ml-4 mr-4 whitespace-nowrap">
        Login
      </p></a>
    </div>
  </div>;
};

export default FloatingLoadingButton;