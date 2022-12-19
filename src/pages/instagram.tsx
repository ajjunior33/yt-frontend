import Head from 'next/head'
import { Button, Card, Container, Dropdown, Input, Loading, Text } from '@nextui-org/react'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Instagram() {
  const [url, setUrl] = useState("");
  const [embed, setEmebed] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function goToURL(url: any): void {
    window.open(embed, '_blank') as any;
  }

  async function handleDownload() {
    setLoading(true);
    const newUrl = url.split("?")[0];
    console.log(newUrl);
    await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/instagram`, { url: newUrl })
      .then(response => {
        setEmebed(response.data.item.link);
        setLoading(false);
        setMessage(response.data.item.caption);
      })
      .catch(err => {
        setLoading(false);
      })


  }

  const router = useRouter();
  return (
    <>
      <Head>
        <title>YT Downloader - Instagram</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7971838840368407"
     crossorigin="anonymous"></script>
      </Head>
      <Container alignItems='center' direction='column' display='flex' justify='center' md css={{ marginTop: 50, padding: 50, paddingBottom: 120 }}>
        <Button.Group color="gradient" ghost css={{ marginBottom: 10 }}>
          <Button onPress={() => router.push("/")}>Youtube</Button>
          <Button onPress={() => router.push("/instagram")}>Instagram</Button>
        </Button.Group>

        <Card isHoverable variant='bordered' css={{ mw: 640, padding: 20 }}>
          <Text h3 css={{ textAlign: "center", textGradient: "45deg, $blue600 -20%, $red600 100%" }} >Insira o link do video do Instagram</Text>
          <Input
            clearable
            bordered
            labelPlaceholder="URL"
            size={"lg"}
            css={{
              marginTop: 20,
              marginBottom: 10
            }}
            onChange={e => setUrl(e.target.value)}
            value={url}
          />

          {loading === true ? (


            <Button disabled auto bordered color="success" css={{ px: "$13" }}>
              <Loading type="points" color="currentColor" size="sm" />
            </Button>
          ) : (
            <Button
              color="primary"
              shadow
              auto
              css={{ marginTop: 10 }}
              onPress={handleDownload}
            >
              Buscar
            </Button>
          )}

        </Card>

        {embed && (
          <Card isHoverable variant='bordered' css={{ mw: 640, padding: 20, marginTop: 30 }}>
            <p>{message}</p>
            <Button color="primary" onClick={goToURL}>Download</Button>
          </Card>
        )}


      </Container>
    </>
  )
}
