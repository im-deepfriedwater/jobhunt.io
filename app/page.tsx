import JobEntryForm from "@/components/job-entry-form";

export default function Home() {
  return (
    <main className="flex min-h-screen h-dvh">
      <div className="w-screen">
        <div className="bg-blue-50 h-full">
          <div>
            <JobEntryForm />
          </div>
        </div>
      </div>
    </main>
  );
}
