import { Alert, Button, Text } from "@mantine/core";
import { FiAlertCircle } from "react-icons/fi";
import { useStore } from "../../utils/store";

const PrivateKeyInfo = () => {
  const [user, updateUser] = useStore((state) => [
    state.user,
    state.updateUser,
  ]);
  const setActiveTab = useStore((state) => state.setActiveTab);

  return (
    <div>
      <p>PK 정보</p>

      <div>
        <Text style={{ marginBottom: "15px" }}>{user.pk}</Text>
        <Alert
          style={{ marginBottom: "15px" }}
          icon={<FiAlertCircle size={16} />}
          title="주의!"
          color="red"
        >
          <p style={{ display: "block", lineHeight: "1.8", fontSize: "16px" }}>
            이 키를 잃어버리거나 타인에게 노출해서는 안됩니다.
          </p>
        </Alert>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => {
              updateUser("pk", null);
              localStorage.setItem(
                "user",
                JSON.stringify({
                  address: user.address,
                  accessToken: user.accessToken,
                })
              );
              setActiveTab("ASSET");
            }}
          >
            확인
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PrivateKeyInfo;
