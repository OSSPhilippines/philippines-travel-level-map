import React, { useState } from "react";
import "./JournalForm.css";

const emptyForm = {
  tripName: "",
  startDate: "",
  endDate: "",
  level: "3",
  highlights: "",
  food: "",
  accommodation: "",
  returnFor: "",
  people: "",
};

const levelNames = {
  1: "Passed there",
  2: "Alighted there",
  3: "Visited there",
  4: "Stayed there",
  5: "Lived there",
};

function JournalForm() {
  const [form, setForm] = useState(emptyForm);
  const [provinceInput, setProvinceInput] = useState("");
  const [placeInput, setPlaceInput] = useState("");
  const [provinces, setProvinces] = useState([]);
  const [places, setPlaces] = useState([]);
  const [message, setMessage] = useState("");

  function updateField(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  function addItem(value, setValue, items, setItems) {
    const cleaned = value.trim();
    if (!cleaned) return;
    if (!items.some((item) => item.toLowerCase() === cleaned.toLowerCase())) {
      setItems([...items, cleaned]);
    }
    setValue("");
  }

  function saveEntry(event) {
    event.preventDefault();
    if (!form.tripName.trim() || !form.startDate) {
      setMessage("Add a trip name and start date.");
      return;
    }
    if (form.endDate && form.endDate < form.startDate) {
      setMessage("End date cannot be earlier than the start date.");
      return;
    }

    const entry = {
      id: Date.now(),
      ...form,
      levelName: levelNames[form.level],
      provinces,
      places,
      createdAt: new Date().toISOString(),
    };
    const saved = JSON.parse(localStorage.getItem("travelJournalEntries") || "[]");
    localStorage.setItem("travelJournalEntries", JSON.stringify([entry, ...saved]));
    setForm(emptyForm);
    setProvinces([]);
    setPlaces([]);
    setMessage("Journal entry saved in this browser.");
  }

  function TagField({ label, value, setValue, items, setItems, placeholder }) {
    return (
      <div className="tag-field">
        <label>{label}</label>
        <div className="tag-input-row">
          <input
            value={value}
            placeholder={placeholder}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                addItem(value, setValue, items, setItems);
              }
            }}
          />
          <button type="button" onClick={() => addItem(value, setValue, items, setItems)}>Add</button>
        </div>
        <div className="tag-list">
          {items.map((item) => (
            <span className="journal-tag" key={item}>
              {item}
              <button type="button" onClick={() => setItems(items.filter((x) => x !== item))}>x</button>
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <main className="journal-page">
      <header className="journal-header">
        <p className="journal-eyebrow">Travel Journal</p>
        <h1>Add a trip</h1>
        <p>Record the places, food, people, and memories from one trip.</p>
      </header>

      <form className="journal-form" onSubmit={saveEntry}>
        <section className="journal-section">
          <h2>1. Trip details</h2>
          <label>Trip name<input name="tripName" value={form.tripName} onChange={updateField} placeholder="Example: Quezon-Laguna 2026" required /></label>
          <div className="journal-two-columns">
            <label>Start date<input type="date" name="startDate" value={form.startDate} onChange={updateField} required /></label>
            <label>End date<input type="date" name="endDate" value={form.endDate} onChange={updateField} /></label>
          </div>
          <fieldset>
            <legend>Travel level</legend>
            <div className="level-options">
              {Object.entries(levelNames).map(([number, label]) => (
                <label className={form.level === number ? "level-card selected" : "level-card"} key={number}>
                  <input type="radio" name="level" value={number} checked={form.level === number} onChange={updateField} />
                  <strong>{number}</strong><span>{label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </section>

        <section className="journal-section">
          <h2>2. Locations</h2>
          <TagField label="Provinces or regions" value={provinceInput} setValue={setProvinceInput} items={provinces} setItems={setProvinces} placeholder="Example: Quezon" />
          <TagField label="Places, localities, or venues" value={placeInput} setValue={setPlaceInput} items={places} setItems={setPlaces} placeholder="Example: Pagsanjan Falls" />
        </section>

        <section className="journal-section">
          <h2>3. Memories</h2>
          <label>What happened?<textarea name="highlights" value={form.highlights} onChange={updateField} /></label>
          <div className="journal-two-columns">
            <label>What did you eat or drink?<textarea name="food" value={form.food} onChange={updateField} /></label>
            <label>What would you return for?<textarea name="returnFor" value={form.returnFor} onChange={updateField} /></label>
          </div>
          <div className="journal-two-columns">
            <label>Accommodation<input name="accommodation" value={form.accommodation} onChange={updateField} /></label>
            <label>People<input name="people" value={form.people} onChange={updateField} placeholder="Separate names with commas" /></label>
          </div>
        </section>

        <section className="journal-section">
          <h2>4. Photos</h2>
          <input type="file" accept="image/*" multiple disabled />
          <small>Photo storage comes after the journal form works.</small>
        </section>

        {message && <p className="journal-message" role="status">{message}</p>}
        <button className="save-journal-button" type="submit">Save journal entry</button>
      </form>
    </main>
  );
}

export default JournalForm;
