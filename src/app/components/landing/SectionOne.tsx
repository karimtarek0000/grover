import Image from "next/image";
import icon1 from "@/assets/icons/section-2/1.svg";
import icon2 from "@/assets/icons/section-2/2.svg";
import icon3 from "@/assets/icons/section-2/3.svg";
import Style from "./style.module.css";

const items = [
  {
    title: "Free shipping",
    desc: "Enjoy Order in a hand using the fresness of groceries",
    icon: icon1,
  },
  {
    title: "15 days returns",
    desc: "Order in a handy way using the freshness of the groceries.",
    icon: icon2,
  },
  {
    title: "Secure checkout",
    desc: "If you get rotten items - return immediately to us.",
    icon: icon3,
  },
];

const { card, cardWrapper, head1, head2 } = Style;

const SectionOne = (): JSX.Element => {
  const cardItems = items.map((item) => {
    return (
      <div key={item.title} className={card}>
        <div className={cardWrapper}>
          <div className="max-h-[6.25rem]">
            <Image src={item.icon} alt="Free shipping" />
          </div>
          <div className="px-6 mt-4">
            <h3 className="font-medium text-22">{item.title}</h3>
            <p className="mt-3 text-14 text-primary font-regular">
              {item.desc}
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="text-center bg-secondary">
      <div className="max-w-[62.5rem] mx-auto py-24">
        <h2 className={head1}>What we Serve</h2>
        <h2 className={head2}>fruit and vegetable delivered to your home</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[3.125rem] mt-16">
          {cardItems}
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
