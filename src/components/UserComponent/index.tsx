import { Avatar, Button, Card, Link, Text } from "@nextui-org/react";
import { GithubLogo } from "phosphor-react";

export function UserComponent() {
  return (
    <Card css={{
      mw: 300,
      marginTop: 30,
      display: 'flex',
      alignItems: 'center',
      justifyContent: "center",
      padding: 10,
    }}>
      <Avatar
        src={"https://avatars.githubusercontent.com/u/16778611?v=4"}
        size="lg"
        squared
      />
      <Text>André Souza</Text>
      <Link href="https://github.com/ajjunior33" target={"_blank"}>
        <Button auto color="gradient">
          <GithubLogo size={20} />
        </Button>
      </Link>
    </Card>
  )
}
