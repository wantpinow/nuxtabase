import { useRouteQuery } from "@vueuse/router";

// set up global dictionary of error messages
export type Error = {
  message: string;
  type?: "error" | "warning";
  timeout?: number;
  timeoutTime?: number;
};
type ErrorDict = { [key: number]: Error };
const errorsDict = reactive<ErrorDict>({});

const _useError = () => {
  // add error to error dictionary
  const addError = ({ message, type = "error", timeout = 2000 }: Error) => {
    const errorId = Math.floor(Math.random() * 100000);
    const timeoutTime = Date.now() + timeout;
    errorsDict[errorId] = {
      message,
      type,
      timeout,
      timeoutTime,
    };
    setTimeout(() => {
      delete errorsDict[errorId];
    }, timeout);
  };
  // array of errors
  const errors = computed(() => {
    return Object.values(errorsDict).sort(
      (a, b) => (a.timeoutTime ?? 0) - (b.timeoutTime ?? 0)
    );
  });

  return { errors, addError };
};

export default _useError;
