import {
  TextInput,
  Select,
  Textarea,
  Button,
  Title,
  Paper,
  Grid,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "react-hook-form";
import { IconDeviceFloppy, IconSend } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import { useJobs } from "../context/JobProvider";

export default function CreateJob({ onClose }) {
  const { addJob } = useJobs();
  const { register, handleSubmit, setValue, watch, reset } = useForm({
    defaultValues: {
      title: "",
      company: "",
      location: "",
      type: "",
      salaryFrom: "",
      salaryTo: "",
      description: "",
      deadline: null,
    },
  });

  const locationOptions = [
    "Bangalore",
    "Chennai",
    "Hyderabad",
    "Mumbai",
    "Delhi NCR",
    "Pune",
    "Kolkata",
    "Ahmedabad",
    "Coimbatore",
    "Kochi",
    "Remote",
    "Hybrid - Bangalore",
    "Hybrid - Chennai",
    "Hybrid - Hyderabad",
    "Hybrid - Mumbai",
    "Hybrid - Delhi NCR",
    "Pan India",
    "International",
  ];

  const jobTypes = [
    "Full-time",
    "Part-time",
    "Contract",
    "Internship",
    "Remote",
  ];

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        addJob(result.job);

        notifications.show({
          title: "Success",
          message: "Job posted successfully!",
          color: "green",
          position: "bottom-left",
          autoClose: 5000,
          styles: (theme) => ({
            root: {
              zIndex: 99999,
              transition: "transform 400ms ease",
            },
          }),
        });

        reset();
        onClose();
      } else {
        notifications.show({
          title: "Error",
          message: result.error || "Failed to post job",
          color: "red",
          position: "bottom-left",
          autoClose: 5000,
          transition: "slide-up",
          transitionDuration: 400,
          zIndex: 99999,
        });
      }
    } catch (error) {
      notifications.show({
        title: "Error",
        message: "Something went wrong while posting the job",
        color: "red",
        position: "bottom-left",
        autoClose: 5000,
        transition: "slide-up",
        transitionDuration: 400,
        zIndex: 99999,
      });
    }
  };

  const onDraftSave = async (data) => {
    try {
      notifications.show({
        title: "Success",
        message: "Draft saved successfully!",
        color: "green",
        position: "bottom-left",
        autoClose: 5000,
        transition: "slide-up",
        transitionDuration: 400,
        zIndex: 99999,
      });

      onClose();
    } catch (error) {
      notifications.show({
        title: "Error",
        message: "Failed to save draft",
        color: "red",
        position: "bottom-left",
        autoClose: 5000,
        transition: "slide-up",
        transitionDuration: 400,
        zIndex: 99999,
      });
    }
  };

  return (
    <Paper radius="md" p="lg" style={{ maxWidth: "900px", margin: "0 auto" }}>
      <Title
        order={3}
        align="center"
        mb="xl"
        size="h3"
        style={{ color: "#494747" }}
      >
        Create Job Opening
      </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid>
          <Grid.Col span={6}>
            <TextInput
              size="xs"
              label="Job Title"
              styles={{
                label: { fontSize: "1rem", fontWeight: 500, color: "#494747" },
              }}
              placeholder="Enter job title"
              required
              {...register("title")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              size="xs"
              label="Company Name"
              styles={{
                label: { fontSize: "1rem", fontWeight: 500, color: "#494747" },
              }}
              placeholder="Amazon, Google, Swiggy"
              required
              {...register("company")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Select
              size="xs"
              label="Location"
              styles={{
                label: { fontSize: "1rem", fontWeight: 500, color: "#494747" },
                dropdown: { zIndex: 99999 },
              }}
              placeholder="Choose preferred location"
              data={locationOptions.map((loc) => ({ value: loc, label: loc }))}
              searchable
              required
              value={watch("location")}
              onChange={(value) => setValue("location", value)}
              comboboxProps={{ withinPortal: true }}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Select
              size="xs"
              label="Job Type"
              styles={{
                label: { fontSize: "1rem", fontWeight: 500, color: "#494747" },
                dropdown: { zIndex: 99999 },
              }}
              placeholder="Full-time"
              data={jobTypes.map((type) => ({ value: type, label: type }))}
              required
              value={watch("type")}
              onChange={(value) => setValue("type", value)}
              comboboxProps={{ withinPortal: true }}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <TextInput
              size="xs"
              label="Salary Range"
              styles={{
                label: { fontSize: "1rem", fontWeight: 500, color: "#494747" },
                input: {
                  "&::placeholder": {
                    color: "#757575",
                  },
                },
              }}
              placeholder="0"
              required
              {...register("salaryFrom")}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <div style={{ paddingTop: "1.65rem" }}>
              <TextInput
                size="xs"
                styles={{
                  input: {
                    "::placeholder": { color: "#757575" },
                  },
                }}
                placeholder="₹ 2,00,000"
                required
                {...register("salaryTo")}
              />
            </div>
          </Grid.Col>
          <Grid.Col span={6}>
            <DateInput
              label="Application Deadline"
              placeholder="Select deadline"
              required
              value={watch("deadline")}
              onChange={(date) => setValue("deadline", date)}
              minDate={new Date()}
              maxDate={
                new Date(new Date().setFullYear(new Date().getFullYear() + 1))
              }
              clearable={false}
              hideOutsideDates
              size="xs"
              styles={(theme) => ({
                label: { fontSize: "1rem", fontWeight: 500, color: "#494747" }, // Added label styling
                input: {
                  backgroundColor: "var(--mantine-color-gray-0)",
                  borderColor: theme.colors.gray[4],
                  "&:focus": {
                    borderColor: theme.colors.blue[5],
                  },
                },
                calendarBase: {
                  width: "100%",
                },
              })}
              classNames={{
                day: "custom-calendar-day",
              }}
              getDayProps={(date) => ({
                disabled:
                  new Date(date) < new Date(new Date().setHours(0, 0, 0, 0)),
              })}
              popoverProps={{
                withinPortal: true,
                zIndex: 9999,
                width: "target",
              }}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <Textarea
              size="xs"
              label="Job Description"
              styles={{
                label: { fontSize: "1rem", fontWeight: 500, color: "#494747" },
              }}
              placeholder="Please Share a description to let the candidates know about the job role"
              required
              rows={4}
              style={{ width: "100%" }}
              value={watch("description")}
              onChange={(e) => setValue("description", e.currentTarget.value)}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1rem",
              }}
            >
              <Button
                size="xs"
                variant="outline"
                leftSection={<IconDeviceFloppy size={16} />}
                onClick={handleSubmit(onDraftSave)}
              >
                Save Draft
              </Button>
              <Button
                size="xs"
                type="submit"
                rightSection={<IconSend size={16} />}
                color="blue"
              >
                Publish Job
              </Button>
            </div>
          </Grid.Col>
        </Grid>
      </form>
    </Paper>
  );
}
