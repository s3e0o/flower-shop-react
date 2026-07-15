export default function ReservationFields({
  form,
  flowers,
  selectedFlower,
  occasions,
  onChange,
}) {
  return (
    <>
      <div className="form-grid">

        <div className="form-group">
          <label>Full Name *</label>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Juan Dela Cruz"
          />
        </div>

        <div className="form-group">
          <label>Phone Number *</label>

          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={onChange}
            placeholder="09XXXXXXXXX"
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="you@example.com"
          />
        </div>

        {!selectedFlower && (
          <div className="form-group">
            <label>Arrangement *</label>

            <select
              name="flower"
              value={form.flower}
              onChange={onChange}
            >
              <option value="">
                Select an arrangement
              </option>

              {flowers.map((flower) => (
                <option
                  key={flower.id}
                  value={flower.name}
                >
                  {flower.name}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="form-group">
          <label>Occasion *</label>

          <select
            name="occasion"
            value={form.occasion}
            onChange={onChange}
          >
            <option value="">
              Select occasion
            </option>

            {occasions.map((occasion) => (
              <option
                key={occasion}
                value={occasion}
              >
                {occasion}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Preferred Date</label>

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={onChange}
          />
        </div>

      </div>

      <div className="form-group">

        <label>Special Requests</label>

        <textarea
          rows="6"
          name="message"
          value={form.message}
          onChange={onChange}
          placeholder="Wrapping color, preferred flowers, card message, delivery instructions..."
        />

      </div>
    </>
  );
}