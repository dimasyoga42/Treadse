const Login = () => {
    return (
        <>
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Login to Treadse</h1>
            <p className="text-center">No friends required. Just post and engage</p>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" />
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" />
                <button className="btn btn-primary mt-4">Login</button>
            </div>
        </div>
    </div>
  </div>
</div>
        </>
    )
}
export default Login;