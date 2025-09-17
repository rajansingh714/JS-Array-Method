// Keep only valid email addresses (contain "@")

const emails = ["user@gmail.com", "invalidemail", "test@yahoo.com"];

const checkEmail = emails.filter((email) => {
  return email.includes("@");
});

console.log(checkEmail);
