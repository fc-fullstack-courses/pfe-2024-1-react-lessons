import { useParams } from 'react-router';

export function NotFoundPage() {
  const { '*': path } = useParams();
  return (
    <div>
      <h1>404 Page not found</h1>
      <p>There is no data for this path: {path}</p>
    </div>
  );
}
