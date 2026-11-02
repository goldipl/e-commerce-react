import React from "react";
import { NavLink, Navigate, useParams } from "react-router-dom";
import { BASE_PATH } from "../../data/catalog";
import { usePageTitle } from "../../hooks/usePageTitle";
import { Breadcrumbs, Card } from "../../components/ui";
import { HELP_TOPICS } from "./helpTopics";
import { HelpLayout, HelpNav, HelpContent } from "./HelpStyles";

export const Help = () => {
  const { topic: slug } = useParams();
  const topic = HELP_TOPICS.find((t) => t.slug === slug);

  usePageTitle(topic?.title);

  if (!topic) return <Navigate to={`${BASE_PATH}/help/${HELP_TOPICS[0].slug}`} replace />;

  return (
    <div className="wrapper">
      <Breadcrumbs items={[["Strona główna", `${BASE_PATH}/`], [topic.title]]} />
      <HelpLayout>
        <HelpNav aria-label="Tematy pomocy">
          <h2>Pomoc</h2>
          {HELP_TOPICS.map((t) => (
            <NavLink key={t.slug} to={`${BASE_PATH}/help/${t.slug}`}>
              {t.title}
            </NavLink>
          ))}
        </HelpNav>
        <Card>
          <HelpContent>
            <h1>{topic.title}</h1>
            {topic.content}
          </HelpContent>
        </Card>
      </HelpLayout>
    </div>
  );
};
