import Input from './Input';

export default function ForgotPasswordSubmit({
  onChange, forgotPasswordSubmit
}) {
  return (
    <div>
      <p className="text-3xl font-black">Confirm new password.</p>
      <div className="mt-10">
        <label className="text-sm">Confirmation code</label>
        <Input onChange={onChange} name="authCode" />
      </div>

      <div className="mt-6">
        <label className="text-sm">New password</label>
        <Input onChange={onChange} name="password" type="password" />
      </div>

      <button
        className="text-white w-full mt-6 bg-pink-600 p-3 rounded"
        onClick={forgotPasswordSubmit}
      >
        Submit new password
      </button>
    </div>
  );
};
