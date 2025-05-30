type SkillTagProp = {
  skills?: string[];
};

export const SkillTag = ({ skills }: SkillTagProp) => {
  return (
    <ul className="tags">
      {skills?.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
};
