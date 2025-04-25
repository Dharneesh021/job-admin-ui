import { Container, SimpleGrid, Center, Loader, Text } from "@mantine/core";
import JobCard from "@/components/JobCard";
import JobFilters from "@/components/JobFilters";
import { useState, useEffect } from "react";
import { useJobs } from "../context/JobProvider";

export default function Home() {
  const { jobs, setJobs } = useJobs();
  const [searchTitle, setSearchTitle] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [salaryRange, setSalaryRange] = useState([0, 50]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/jobs");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setJobs(Array.isArray(data) ? data : []);  // Ensure data is array
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
        setError("Failed to fetch jobs. Please try again later.");
        setJobs([]);  // Reset to empty array on error
      } finally {
        setLoading(false);
      }
    };
    
    fetchJobs();
  }, [setJobs]);

  const filteredJobs = jobs?.filter((job) => {
    if (!job) return false;  // Skip if job is undefined
    
    const salary =
      typeof job.salary === "string"
        ? parseInt(job.salary.split(" ")[0])
        : job.salary / 100000;

    return (
      job.title?.toLowerCase().includes(searchTitle?.toLowerCase() || "") &&
      job.location?.toLowerCase().includes(location?.toLowerCase() || "") &&
      (!jobType || job.type === jobType) &&
      salary >= salaryRange[0] &&
      salary <= salaryRange[1]
    );
  }) || [];

  if (loading) {
    return (
      <Center style={{ height: "100vh" }}>
        <div style={{ textAlign: "center" }}>
          <Loader size="lg" variant="bars" color="#228BE6" />
          <Text size="sm" mt="sm" fw={500} c="dimmed">
            Loading jobs...
          </Text>
        </div>
      </Center>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container
      size="100%"
      py="xl"
      style={{ maxWidth: "none", padding: "10px" }}
    >
      <JobFilters
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
        location={location}
        setLocation={setLocation}
        jobType={jobType}
        setJobType={setJobType}
        salaryRange={salaryRange}
        setSalaryRange={setSalaryRange}
      />

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="lg" mt="xl">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => <JobCard key={index} job={job} />)
        ) : (
          <div
            style={{
              width: "100%",
              textAlign: "center",
              gridColumn: "1 / -1",
              color: "#FF4444",
              fontSize: "18px",
              fontWeight: "500",
              padding: "40px 0",
            }}
          >
            No jobs found 😕
          </div>
        )}
      </SimpleGrid>
    </Container>
  );
}
