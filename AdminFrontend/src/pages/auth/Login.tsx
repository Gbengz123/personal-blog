function Login() {
  return (
    <div className="bg-[#272724] rounded-2xl p-8 w-full max-w-md">
      {/* Email */}
      <label className="block text-[#aaa] text-[11px] font-semibold tracking-widest uppercase mb-2">
        Email
      </label>
      <input
        type="email"
        placeholder="admin@folio.com"
        autoComplete="email"
        className="w-full bg-[#333330] border border-[#3a3a37] rounded-[10px] text-[#ccc] placeholder-[#555] text-sm px-4 py-3 mb-5 outline-none focus:border-[#c0522a] transition-colors"
      />

      {/* Password */}
      <label className="block text-[#aaa] text-[11px] font-semibold tracking-widest uppercase mb-2">
        Password
      </label>
      <input
        type="password"
        placeholder="••••••••"
        autoComplete="current-password"
        className="w-full bg-[#333330] border border-[#3a3a37] rounded-[10px] text-[#ccc] placeholder-[#555] text-sm px-4 py-3 mb-6 outline-none focus:border-[#c0522a] transition-colors"
      />

      {/* Button */}
      <button className="w-full bg-[#c0522a] hover:bg-[#b34824] active:scale-[0.98] active:bg-[#a03f1e] text-white font-semibold text-base rounded-[10px] py-3.5 transition-all duration-150 disabled:opacity-70 disabled:cursor-not-allowed">
        Sign in{/* {loading ? 'Signing in…' : 'Sign in to Admin'} */}
      </button>

      {/* Error */}
      {/* {error && (
        <p className="text-[#e05a2a] text-sm text-center mt-3">{error}</p>
      )} */}
    </div>
  );
}

export default Login;
