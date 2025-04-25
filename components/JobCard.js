import { Card, Text, Badge, Button, Group, Image } from "@mantine/core";
import { Clock, Building2, Banknote, Building } from "lucide-react";

const JobCard = ({ job }) => {
  const getCompanyLogo = (companyName) => {
    if (!companyName) return null;
    const normalizedName = companyName.toLowerCase().trim();

    switch (normalizedName) {
      // Tech Giants
      case "google":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png";
      case "microsoft":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png";
      case "amazon":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png";
      case "apple":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png";
      case "meta":
      case "facebook":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png";

      // Streaming & Entertainment
      case "netflix":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png";
      case "spotify":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/2560px-Spotify_logo_with_text.svg.png";
      case "disney":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/2560px-Disney%2B_logo.svg.png";

      // Automotive
      case "tesla":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/2560px-Tesla_Motors.svg.png";
      case "bmw":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2560px-BMW.svg.png";
      case "mercedes":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2560px-Mercedes-Logo.svg.png";
      case "toyota":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Toyota_logo.svg/2560px-Toyota_logo.svg.png";

      // Tech Companies
      case "ibm":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png";
      case "intel":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/2560px-Intel_logo_%282006-2020%29.svg.png";
      case "adobe":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/2560px-Adobe_Corporate_Logo.png";
      case "salesforce":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png";
      case "oracle":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png";
      case "sap":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/2560px-SAP_2011_logo.svg.png";

      // Electronics
      case "samsung":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png";
      case "lg":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/LG_symbol.svg/2560px-LG_symbol.svg.png";
      case "sony":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Sony_logo.svg/2560px-Sony_logo.svg.png";

      // Networking & Telecom
      case "cisco":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/2560px-Cisco_logo_blue_2016.svg.png";
      case "qualcomm":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Qualcomm_logo.svg/2560px-Qualcomm_logo.svg.png";
      case "at&t":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/AT%26T_logo_2016.svg/2560px-AT%26T_logo_2016.svg.png";

      // Social Media
      case "twitter":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png";
      case "linkedin":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png";
      case "instagram":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png";

      // Transportation
      case "uber":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png";
      case "lyft":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lyft_logo.svg/2560px-Lyft_logo.svg.png";

      // E-commerce
      case "ebay":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png";
      case "shopify":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png";
      case "paypal":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png";

      // Gaming
      case "nintendo":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/2560px-Nintendo.svg.png";
      case "xbox":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Xbox_logo_%282019%29.svg/2560px-Xbox_logo_%282019%29.svg.png";
      case "playstation":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/2560px-PlayStation_logo.svg.png";

      // Cloud Services
      case "twilio":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Twilio-logo-red.svg/2560px-Twilio-logo-red.svg.png";
      case "snowflake":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Snowflake_Logo.svg/2560px-Snowflake_Logo.svg.png";
      case "mongodb":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png";

      // Hardware
      case "nvidia":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/2560px-Nvidia_logo.svg.png";
      case "amd":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/AMD_Logo.svg/2560px-AMD_Logo.svg.png";
      case "dell":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/2560px-Dell_logo_2016.svg.png";
      case "hp":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2560px-HP_logo_2012.svg.png";

      // Others
      case "airbnb":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png";
      case "slack":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2560px-Slack_Technologies_Logo.svg.png";
      case "zoom":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Zoom_Logo.svg/2560px-Zoom_Logo.svg.png";
      case "dropbox":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dropbox_Icon.svg/2560px-Dropbox_Icon.svg.png";
      case "pinterest":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pinterest_Logo.svg/2560px-Pinterest_Logo.svg.png";

      // Food & Beverage Companies
      case "mcdonalds":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2560px-McDonald%27s_Golden_Arches.svg.png";
      case "starbucks":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/2560px-Starbucks_Corporation_Logo_2011.svg.png";
      case "subway":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Subway_2016_logo.svg/2560px-Subway_2016_logo.svg.png";
      case "dominos":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/2560px-Domino%27s_pizza_logo.svg.png";
      case "kfc":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/KFC_logo.svg/2560px-KFC_logo.svg.png";
      case "burgerking":
      case "burger king":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2560px-Burger_King_logo_%281999%29.svg.png";
      case "pizzahut":
      case "pizza hut":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Pizza_Hut_1967-1999_logo.svg/2560px-Pizza_Hut_1967-1999_logo.svg.png";
      case "dunkindonuts":
      case "dunkin":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Dunkin%27_Logo.svg/2560px-Dunkin%27_Logo.svg.png";
      case "wendys":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Wendy%27s_2013_logo.svg/2560px-Wendy%27s_2013_logo.svg.png";
      case "tacobell":
      case "taco bell":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Taco_Bell_2016.svg/2560px-Taco_Bell_2016.svg.png";
      // Food Delivery
      case "zomato":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Zomato_logo.png/2560px-Zomato_logo.png";
      case "swiggy":
      case "Swiggy":
        return "https://logosandtypes.com/wp-content/uploads/2021/01/swiggy.svg";
      case "doordash":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/DoorDash_logo.svg/2560px-DoorDash_logo.svg.png";
      default:
        return null;
    }
  };

  const formatSalaryToLPA = (salary) => {
    const salaryStr = String(salary);
    const salaryNum = Number(salaryStr.replace(/[^0-9]/g, ""));
    const lpa = (salaryNum / 100000).toFixed(1);
    return `${lpa} LPA`;
  };

  const getDaysAgo = (postedDate) => {
    const posted = new Date(postedDate);
    const today = new Date();

    const isNow =
      posted.getFullYear() === today.getFullYear() &&
      posted.getMonth() === today.getMonth() &&
      posted.getDate() === today.getDate() &&
      posted.getHours() === today.getHours();

    if (isNow) return "Just now";

    const diffTime = Math.abs(today - posted);
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));

    if (diffHours < 1) return "Less than an hour ago";
    if (diffHours === 1) return "1 hour ago";
    if (diffHours < 24) return `${diffHours} hours ago`;

    const diffDays = Math.floor(diffHours / 24);
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;

    const diffWeeks = Math.floor(diffDays / 7);
    if (diffWeeks === 1) return "1 week ago";
    if (diffWeeks < 4) return `${diffWeeks} weeks ago`;

    const diffMonths = Math.floor(diffDays / 30);
    if (diffMonths === 1) return "1 month ago";
    return `${diffMonths} months ago`;
  };

  const getExperienceLevel = (salary) => {
    const salaryStr = String(salary);
    const salaryNum = Number(salaryStr.replace(/[^0-9]/g, ""));
    const salaryLPA = salaryNum / 100000;

    if (salaryLPA <= 2) return "1-2 years";
    if (salaryLPA <= 3) return "2-3 years";
    if (salaryLPA <= 4) return "3-4 years";
    if (salaryLPA <= 6) return "4-6 years";
    if (salaryLPA <= 8) return "6-8 years";
    if (salaryLPA <= 10) return "8-10 years";
    return "10+ years";
  };

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{ minWidth: 200, height: "100%" }}
    >
      <Group
        position="apart"
        mb="xs"
        style={{ justifyContent: "space-between" }}
      >
        {getCompanyLogo(job.company) ? (
          <Image
            src={getCompanyLogo(job.company)}
            width={30}
            height={30}
            alt={job.company}
          />
        ) : (
          <Building size={30} color="#868E96" />
        )}
        <Badge
          variant="filled"
          style={{
            marginLeft: "auto",
            backgroundColor: "#E7F5FF",
            color: "#000000",
            fontWeight: "700",
          }}
        >
          {getDaysAgo(job.posted)}
        </Badge>
      </Group>

      <Text size="xl" fw={600} mt="sm" style={{ color: "#494747" }}>
        {job.title}
      </Text>

      <Group spacing="lg" mt="sm" mb="md">
        <Group spacing={6} style={{ gap: "5px" }}>
          <Clock size={14} color="#868E96" />
          <Text size="sm" color="dimmed">
            {getExperienceLevel(job.salary)}
          </Text>
        </Group>

        <Group spacing={6} style={{ gap: "5px" }}>
          <Building2 size={14} color="#868E96" />
          <Text size="sm" color="dimmed">
            {job.type}
          </Text>
        </Group>

        <Group spacing={6} style={{ gap: "5px" }}>
          <Banknote size={14} color="#868E96" />
          <Text size="sm" color="dimmed">
            {formatSalaryToLPA(job.salary)}
          </Text>
        </Group>
      </Group>

      <div mt="sm">
        {job.description
          .split(".")
          .filter(Boolean)
          .map((point, index) => (
            <Text
              key={index}
              size="sm"
              color="dimmed"
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "4px",
                fontWeight: "500",
              }}
            >
              <span
                style={{
                  marginRight: "8px",
                  marginTop: "6px",
                  minWidth: "4px",
                  height: "4px",
                  backgroundColor: "#868E96",
                  borderRadius: "50%",
                  display: "inline-block",
                }}
              />
              {point.trim()}
            </Text>
          ))}
      </div>

      <Button variant="filled" fullWidth mt="md" radius="md" color="blue">
        Apply Now
      </Button>
    </Card>
  );
};

export default JobCard;
