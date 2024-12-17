import React from 'react';

type RoadmapEditorPageProps = {
  roadmapId: string;
};

export function RoadmapEditorPage(props: RoadmapEditorPageProps) {
  const { roadmapId } = props;

  return (
    <div>
      <h1>Editor Roadmap Page</h1>
      <p>Roadmap ID: {roadmapId}</p>
    </div>
  );
}
