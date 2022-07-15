function Cardform({ formData, handleFormFrontChange, handleFormBackChange }) {
  return (
    <div>
      <form>
        <label htmlFor="front">Front</label>
        <textarea
          type="textarea"
          id="front"
          className="form-control"
          placeholder="Front side of card"
          value={formData.front}
          onChange={handleFormFrontChange}
        />
        <label htmlFor="back">Back</label>
        <textarea
          type="textarea"
          id="back"
          className="form-control"
          placeholder="Back side of card"
          value={formData.back}
          onChange={handleFormBackChange}
        />
      </form>
    </div>
  );
}
export default Cardform;
