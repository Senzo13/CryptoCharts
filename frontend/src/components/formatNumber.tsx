export default function formatNumber(x: any) {
  if (Number(x) < 1) {
    return x.toString();
  }
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}