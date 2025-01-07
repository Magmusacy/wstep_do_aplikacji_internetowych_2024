export default function ShapeDetails(props) {
  return (
    <div>
      { props.shape == 1 ? "Koło" : props.shape == 2 ? "Kwadrat" : props.shape == 3 ? "Prostokat" : "" }
    </div>
  );
};