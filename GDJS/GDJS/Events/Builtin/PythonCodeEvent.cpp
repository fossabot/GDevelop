/** \file
 *  GDevelop
 *  2008-2016 Florian Rival (Florian.Rival@gmail.com)
 */

#include "PythonCodeEvent.h"
#include <fstream>
#include <iostream>
#include "GDCore/CommonTools.h"
#include "GDCore/Events/CodeGeneration/EventsCodeGenerationContext.h"
#include "GDCore/Events/CodeGeneration/EventsCodeGenerator.h"
#include "GDCore/Events/CodeGeneration/ExpressionsCodeGeneration.h"
#include "GDCore/Events/Serialization.h"
#include "GDCore/Events/Tools/EventsCodeNameMangler.h"
#include "GDCore/Project/Layout.h"
#include "GDCore/Project/Project.h"
#include "GDCore/Project/SourceFile.h"
#include "GDCore/Serialization/SerializerElement.h"
#include "GDCore/Tools/Localization.h"
#include "GDCore/Tools/Log.h"

using namespace std;

namespace gdjs {

void PythonCodeEvent::SerializeTo(gd::SerializerElement& element) const {
  element.AddChild("inlineCode").SetValue(inlineCode);
  element.AddChild("parameterObjects").SetValue(parameterObjects);
  element.AddChild("useStrict").SetValue(useStrict);
}

void PythonCodeEvent::UnserializeFrom(gd::Project& project,
                                  const gd::SerializerElement& element) {
  inlineCode = element.GetChild("inlineCode").GetValue().GetString();
  parameterObjects =
      element.GetChild("parameterObjects").GetValue().GetString();

  if (!element.HasChild("useStrict")) {
    // Compatibility with GD <= 5.0.0-beta68
    useStrict = false;
    // end of compatibility code
  } else {
    useStrict = element.GetChild("useStrict").GetBoolValue();
  }
}

PythonCodeEvent::PythonCodeEvent()
    : BaseEvent(),
      inlineCode("runtimeScene.setBackgroundColor(100,100,240);\n"),
      useStrict(true) {}

}  // namespace gdjs
