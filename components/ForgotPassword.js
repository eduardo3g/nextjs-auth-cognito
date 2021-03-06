import Input from './Input';

export default function ForgotPassword({
  onChange, setUiState, forgotPassword
}) {
  return (
    <div>
      <p className="text-3xl font-black">Forgot your password?</p>
      <div className="mt-10">
        <label className="text-sm">Email</label>
        <Input onChange={onChange} name="email" type="email" />
      </div>

      <button
        className="text-white w-full mt-6 bg-pink-600 p-3 rounded"
        onClick={forgotPassword}
      >
        Reset password
      </button>

      <button
        onClick={() => setUiState('signIn')}
        className="text-sm mt-6 text-pink-600"
      >
        Cancel
      </button>
    </div>
  );
};
