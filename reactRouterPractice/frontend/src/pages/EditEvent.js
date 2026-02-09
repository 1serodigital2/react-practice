import {useParams} from 'react-router-dom'

const EditEventPage = () => {
  const params = useParams();
  return <h1>EditEventPage ({params.eventSlug})</h1>;
};
export default EditEventPage;
