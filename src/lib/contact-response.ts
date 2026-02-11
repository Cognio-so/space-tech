interface ContactApiResponse {
  success?: boolean;
  message?: string;
}

const SUCCESS_HINTS = ["sent", "submitted", "received", "queued", "success", "ok"];

const hasSuccessHint = (value?: string) => {
  if (!value) return false;
  const normalized = value.toLowerCase();
  return SUCCESS_HINTS.some((hint) => normalized.includes(hint));
};

export const parseContactResponse = (rawResponse: string): ContactApiResponse => {
  if (!rawResponse) return {};

  try {
    return JSON.parse(rawResponse) as ContactApiResponse;
  } catch {
    return { message: rawResponse };
  }
};

export const isContactSubmissionSuccessful = (
  responseOk: boolean,
  result: ContactApiResponse
) => {
  if (result.success === true) return true;
  if (result.success === false) return false;
  if (responseOk) return true;
  return hasSuccessHint(result.message);
};
