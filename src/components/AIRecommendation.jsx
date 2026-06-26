function AIRecommendation({
  aiStudentName,
  setAiStudentName,
  interest,
  setInterest,
  skillLevel,
  setSkillLevel,
  weeklyHours,
  setWeeklyHours,
  recommendation,
  aiLoading,
  aiMessage,
  generateAIRecommendation
}) {

    return(
        <>
            <hr/>
      <h2>AI Study Plan Recommendation</h2>
      {aiMessage && <p>{aiMessage}</p>}
      {aiLoading && <p>Generating recommendation...</p>}


    <div className="form-row">
      <input
        type="text"
        placeholder="Student name"
        value={aiStudentName}
        onChange={(event) => setAiStudentName(event.target.value)}
      />

      <input
        type="text"
        placeholder="Interest"
        value={interest}
        onChange={(event) => setInterest(event.target.value)}
      />

      <select
        value={skillLevel}
        onChange={(event) => setSkillLevel(event.target.value)}
      >
        <option value="">Select Skill Level</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      <input
        type="number"
        placeholder="Weekly study hours"
        value={weeklyHours}
        onChange={(event) => setWeeklyHours(event.target.value)}
      />

      <button onClick={generateAIRecommendation} disabled={aiLoading}>
        {aiLoading ? "Generating..." : "Generate AI Recommendation"}
      </button>

    </div>

      {recommendation && (
        <div className="ai-output">
          <h3>Generated Study Plan</h3>
          <pre className="ai-output pre" style={{ whiteSpace: "pre-wrap" }}>
            {recommendation}
          </pre>
        </div>
      )}

        </>
    );
}
export default AIRecommendation;