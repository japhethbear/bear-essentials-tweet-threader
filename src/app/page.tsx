import Image from "next/image";

export default function Home() {
  return (
    <Form>
      <Image
        src="/bear-essentials.png"
        alt="Bear Essentials"
        width={200}
        height={200}
      />
      <h1>Bear Essentials Tweet Threader</h1>
    </Form>
  );
}
