const MealsDetailPage = async ({ params }) => {
  const { slug } = await params;
  return (
    <main>
      <h1>Meals detail page</h1>
      <div>{slug}</div>
    </main>
  );
};

export default MealsDetailPage;
