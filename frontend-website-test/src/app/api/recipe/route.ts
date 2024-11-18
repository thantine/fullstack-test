export async function GET() {
  return new Response(
    JSON.stringify({
      stats: [
        { label: "Prep", value: "10mins" },
        { label: "Bake", value: "1 hr to 1 hr 15 mins" },
        { label: "Total", value: "1 hr 10 mins" },
      ],
      yield: { label: "Yields", value: "1 loaf, 12 generous servings" },
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
