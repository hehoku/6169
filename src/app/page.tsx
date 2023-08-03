import AuthForm from "./auth-form";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h1 className="text-3xl font-bold mt-10">6169</h1>
      <AuthForm />
    </div>
  );
}
