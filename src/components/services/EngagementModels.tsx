import { Clock, Globe } from "lucide-react";

import EngagementCard from "./EngagementCard";

const EngagementModels = () => {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Engagement Models</h2>
          <p className="mx-auto max-w-2xl text-lg opacity-75">
            Flexible options to meet your specific project needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <EngagementCard
            icon={<Clock className="h-10 w-10 text-collective-orange" />}
            title="Development Stream"
            description="Embedded pod of engineers collaborate within a larger project team to co-deliver solutions. Provides scalability and flexibility for dynamic needs via team augmentation."
            features={[
              "Flexible team scaling",
              "Integration with your existing team",
              "Specialized expertise as needed",
              "Agile process adaptation",
            ]}
          />
          <EngagementCard
            icon={<Globe className="h-10 w-10 text-collective-orange" />}
            title="End-to-End Project"
            description="Product development handled entirely by our team. Suitable for well-defined product requirements. Allows clients to focus on strategy while we manage execution."
            features={[
              "Complete project ownership",
              "Turnkey solution delivery",
              "Comprehensive planning & execution",
              "Regular progress reporting",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
