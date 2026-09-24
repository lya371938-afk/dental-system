import { useState } from "react";

function Patients() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [patients, setPatients] = useState([]);

  function addPatient() {
    if (name === "" || phone === "") {
      alert("يرجى إدخال اسم المريض ورقم الهاتف");
      return;
    }

    if (!/^07\d{9}$/.test(phone)) {
      alert("رقم الهاتف يجب أن يكون 11 رقمًا ويبدأ بـ 07");
      return;
    }

    const newPatient = {
      id: Date.now(),
      name: name,
      phone: phone,
    };

    setPatients([...patients, newPatient]);

    setName("");
    setPhone("");
  }

  return (
    <div
      dir="rtl"
      style={{
        padding: "25px",
        fontFamily: "Arial",
        backgroundColor: "#eef4f7",
        minHeight: "70vh",
      }}
    >
      <h2 style={{ color: "#164e63" }}>
        👥 المرضى
      </h2>

      <div
        style={{
          backgroundColor: "#dff3f6",
          padding: "25px",
          borderRadius: "18px",
          marginBottom: "30px",
          border: "1px solid #b8e0e5",
        }}
      >
        <h3 style={{ color: "#155e75" }}>
          ➕ إضافة مريض جديد
        </h3>

        <input
          type="text"
          placeholder="👤 اسم المريض"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "13px",
            margin: "5px",
            borderRadius: "10px",
            border: "1px solid #b8cbd0",
            fontSize: "15px",
          }}
        />

        <input
          type="tel"
          placeholder="📞 رقم الهاتف"
          value={phone}
          maxLength={11}
          onChange={(e) => {
            const value = e.target.value;

            if (/^\d*$/.test(value)) {
              setPhone(value);
            }
          }}
          style={{
            padding: "13px",
            margin: "5px",
            borderRadius: "10px",
            border: "1px solid #b8cbd0",
            fontSize: "15px",
          }}
        />

        <button
          onClick={addPatient}
          style={{
            padding: "13px 22px",
            margin: "5px",
            border: "none",
            borderRadius: "10px",
            backgroundColor: "#0f766e",
            color: "white",
            cursor: "pointer",
            fontSize: "15px",
          }}
        >
          ➕ إضافة المريض
        </button>
      </div>
      <h3
        style={{
          color: "#164e63",
          marginBottom: "15px",
        }}
      >
        📋 قائمة المرضى
      </h3>

      {patients.length === 0 ? (
        <div
          style={{
            backgroundColor: "#e5edf0",
            padding: "25px",
            borderRadius: "15px",
            color: "#64748b",
          }}
        >
          لا يوجد مرضى حتى الآن.
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gap: "15px",
          }}
        >
          {patients.map((patient) => (
            <div
              key={patient.id}
              style={{
                backgroundColor: "#f8fafc",
                padding: "20px",
                borderRadius: "18px",
                border: "1px solid #d7e2e7",
              }}
            >
              <h3 style={{ color: "#164e63" }}>
                👤 {patient.name}
              </h3>

              <p style={{ color: "#475569" }}>
                📞 {patient.phone}
              </p>

              <hr />

              <button>🦷 الأسنان</button>
              <button>📅 المواعيد</button>
              <button>🩺 العلاج</button>
              <button>💰 الفواتير</button>
              <button>📝 الملاحظات</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Patients;