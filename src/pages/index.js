import { Inter } from "@next/font/google";
import PageLayout from "@/components/PageLayout";
import Carousel from "@/components/Carousel/Carousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <PageLayout title="Portfolio App">
      <Carousel />
      <div className="bg-purple-50 m-7 p-5 rounded-lg">
        <h2 className="text-purple-900 font-bold text-4xl mb-4">About us</h2>
        <p className="text-purple-900">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
          incidunt pariatur quibusdam temporibus velit ullam atque laborum
          eligendi. Voluptates doloribus corporis culpa facere minima animi
          pariatur eum ullam exercitationem esse dolorem asperiores ex soluta
          sequi aliquid incidunt sint, illo vero aspernatur mollitia illum
          voluptatibus. Quam vero voluptatem debitis voluptas ratione tempore
          est et modi a amet voluptates nobis optio ea quod magnam quo ut,
          laboriosam eaque reprehenderit ipsa praesentium dolores voluptatibus
          beatae. Minima, aliquid quas? Corrupti amet fuga nemo quos ipsum
          expedita, temporibus aspernatur aliquid explicabo aut reiciendis,
          optio, saepe error maiores cumque? Obcaecati aliquam facilis
          accusantium enim dignissimos temporibus!
        </p>
      </div>
    </PageLayout>
  );
}
