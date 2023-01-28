const _useSupabaseAuth = () => {
  const { addError } = useError();

  // login user with email and password
  const login = async (
    email: string | undefined,
    password: string | undefined
  ) => {
    const sb = useSupabaseAuthClient();

    // validate form
    if (!email) {
      addError({ message: "Email required.", type: "warning" });
      return;
    }
    if (password === undefined) {
      addError({ message: "Password required.", type: "warning" });
      return;
    }

    // attempt login
    const { error } = await sb.auth.signInWithPassword({
      email: email,
      password: password,
    });

    // throw login error
    if (error !== null) {
      addError({ message: error.message, type: "error" });
      return;
    }

    // navigate to home if successful
    const user = useSupabaseUser();
    watch(
      user,
      async () => {
        // wait until user.value has been updated
        if (user.value) {
          await navigateTo("/");
        }
      },
      { immediate: true }
    );
  };

  // register new user with email and password
  const register = async (
    email: string | undefined,
    password: string | undefined,
    passwordConfirm: string | undefined
  ) => {
    const sb = useSupabaseAuthClient();

    // validate email
    if (!email) {
      addError({ message: "Email required.", type: "warning" });
      return;
    }
    const emailRegex = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!emailRegex.test(email)) {
      addError({ message: "Invalid email.", type: "warning" });
      return;
    }

    // validate password
    if (password === undefined) {
      addError({ message: "Password required.", type: "warning" });
      return;
    }
    const passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[0-9]).{8,}$/);
    if (!passwordRegex.test(password)) {
      addError({
        message:
          "Password must contain at least 8 characters, at least one letter, and at least one number.",
        type: "warning",
      });
      return;
    }
    if (passwordConfirm === undefined) {
      addError({ message: "Password confirmation required.", type: "warning" });
      return;
    }
    if (password !== passwordConfirm) {
      addError({ message: "Passwords do not match.", type: "warning" });
      return;
    }

    // attempt login
    const { error } = await sb.auth.signUp({
      email: email,
      password: password,
    });

    // throw login error
    if (error !== null) {
      addError({ message: error.message, type: "error" });
      return;
    }

    // navigate to home if successful
    const user = useSupabaseUser();
    watch(
      user,
      async () => {
        // wait until user.value has been updated
        if (user.value) {
          await navigateTo("/");
        }
      },
      { immediate: true }
    );
  };

  // logout user
  const logout = async () => {
    const sb = useSupabaseAuthClient();
    await sb.auth.signOut();
    // navigate to home
    const user = useSupabaseUser();
    watch(
      user,
      async () => {
        // wait until user.value has been updated
        if (user.value) {
          await navigateTo("/");
        }
      },
      { immediate: true }
    );
  };

  return { login, register, logout };
};
export default _useSupabaseAuth;
