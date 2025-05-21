import { UiSubheading } from "@/components/common/typography/UiSubheading";
import Layout from "../../common/Layout";
import { Heading } from "@/components/common/typography/Heading";

const DynamicStateSection = ({
  title = "",
  subtitle = "",
  stats = [
    {
      value: "",
      description: "",
    },
    // ... other default stats
  ],
  theme = {
    bgColor: "bg-secondary-500",
    textColor: "text-primary-500",
    textParagraphColor: "text-gray-400",
    borderColor: "border-gray-500",
    valueColor: "text-white",
  },
}) => {
  return (
    <div
      className={`${theme.bgColor} ${theme.textColor} pb-0 pt-5 md:pt-12 md:pb-12`}
    >
      <Layout>
        {/* Heading */}
        <div className="text-center mb-8">
          <UiSubheading className="text-primary-500 text-center mb-2">
            {subtitle}
          </UiSubheading>
          <Heading
            level="h2"
            color="light"
            spacing="lg"
            className="font-semibold"
          >
            {title}
          </Heading>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex justify-between gap-5 items-center border-b ${theme.borderColor} pb-4`}
            >
              <p className={`text-lg ${theme.textParagraphColor} max-w-sm`}>
                {stat.description}
              </p>
              <span
                className={`text-[50px] sm:text-[80px] lg:text-[110px] font-normal ${theme.valueColor}`}
              >
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default DynamicStateSection;
