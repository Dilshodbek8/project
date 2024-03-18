import cn from "./style.module.css";
export default function InfoCard({ title, desc, img, link }) {
  return (
    <div className={cn.body}>
      <div className={cn.text}>
        <h2>{title}</h2>
        <p>{desc}</p>
        <a href="#">{link}</a>
      </div>
      <div className={cn.image}>
        <img src={img} alt={img} />
      </div>
    </div>
  );
}
