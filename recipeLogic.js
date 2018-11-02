module.exports = {
  canMakeRecipe
};

function canMakeRecipe(ingredeints, recipe = { ingredeints: [] }) {
  for (let i = 0; i < recipe.ingredeints.length; i++) {
    let recipeIngredeint = recipe.ingredeints[i];
    console.log("check if " + recipeIngredeint + " is in " + ingredeints);
    if (!ingredeints.includes(recipeIngredeint)) {
      console.log(recipeIngredeint + " is NOT in " + ingredeints);
      return false;
    }
  }

  return true;
}
