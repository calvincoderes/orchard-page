import { spacing, colors } from "@/styles/theme";

// components
import FlexContainer from "@/components/FlexContainer";
import { SectionContent } from "@/components/SectionContent";
import { ArticlesContent } from "@/components/ArticlesContent";

export default function Home() {
  return (
    <div className="main">
      <FlexContainer
        id="main-container"
        layoutVariant="main-layout"
        direction="column"
      >
        <section id="main-section">
          <SectionContent />
        </section>
        <section id="articles">
          <article>
            <ArticlesContent />
          </article>
        </section>
      </FlexContainer>
    </div>
  );
}
