import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export const action = async ({ request, params }) => {
  try {
    const searchParam = new URL(request.url).searchParams;
    const mode = searchParam.get("mode") || "login";

    const formData = await request.formData();
    const authData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    console.log("form Data", authData);
    const response = await fetch("http://localhost:8080/" + mode, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authData),
    });

    if (!response.ok) {
      throw new Response({ message: `Unable to ${mode}` }, { status: 403 });
    }

    const resData = response.json();
    console.log("login resData", resData);
    return resData;
  } catch (error) {
    console.error("Critical login error", error);
  }
};
