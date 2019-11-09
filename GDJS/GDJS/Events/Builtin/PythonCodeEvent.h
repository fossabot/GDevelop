/** \file
 *  GDevelop
 *  2008-2016 Florian Rival (Florian.Rival@gmail.com)
 */

#ifndef PYCODEEVENT_H
#define PYCODEEVENT_H
#include "GDCore/Events/Event.h"
namespace gd {
class Instruction;
class Project;
class SerializerElement;
class Layout;
}  // namespace gd

namespace gdjs {

/**
 * \brief Event used to insert raw javascript code into events.
 */
class PythonCodeEvent : public gd::BaseEvent {
 public:
  PythonCodeEvent();
  virtual ~PythonCodeEvent(){};

  virtual PythonCodeEvent* Clone() const { return new PythonCodeEvent(*this); }

  virtual bool IsExecutable() const { return true; }
  virtual bool CanHaveSubEvents() const { return false; }

  const gd::String& GetInlineCode() const { return inlineCode; };
  void SetInlineCode(const gd::String& code) { inlineCode = code; };

  const gd::String& GetParameterObjects() const { return parameterObjects; };
  void SetParameterObjects(const gd::String& objectName) {
    parameterObjects = objectName;
  };

  virtual void SerializeTo(gd::SerializerElement& element) const;
  virtual void UnserializeFrom(gd::Project& project,
                               const gd::SerializerElement& element);
  virtual bool IsUseStrict() const { return useStrict; }

 private:
  void Init(const PythonCodeEvent& event);

  gd::String inlineCode;        ///< Contains the Javacript code of the event.
  gd::String parameterObjects;  ///< Name of the (group of) objects to pass as
                                ///< parameter.
  bool useStrict;  ///< Should the generated PY function have "use strict". true
                   ///< by default. Should be removed once all the game engine
                   ///< is using "use strict".
};

}  // namespace gdjs

#endif  // PYCODEEVENT_H
